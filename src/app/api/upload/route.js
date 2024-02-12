import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from 'uniqid';

export async function POST(req) {
  const data = await req.formData();

  if (data.get('file')) {
    try {
      const file = data.get('file');
      console.log('Iniciando upload para o S3');

      const s3Client = new S3Client({
        region: 'sa-east-1',
        credentials: {
          accessKeyId: process.env.MY_AWS_ACCESS_KEY,
          secretAccessKey: process.env.MY_AWS_SECRET_KEY,
        },
      });

      const ext = file.name.split('.').slice(-1)[0];
      const newFileName = uniqid() + '.' + ext;

      const chunks = [];
      const reader = file.stream().getReader();

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        chunks.push(value);
        console.log('lendo o chunk');
      }

      console.log('Leitura de chunks concluída');
      const buffer = Buffer.concat(chunks);

      const bucket = 'upload-food-wills';
      const s3Response = await s3Client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: newFileName,
        ACL: 'public-read',
        ContentType: file.type,
        Body: buffer,
      }));

      console.log('Resposta do S3:', s3Response);

      if (s3Response.$metadata.httpStatusCode === 200) {
        const link = 'https://upload-food-wills.s3.sa-east-1.amazonaws.com/' + newFileName;
        console.log('Upload para o S3 concluído com sucesso. Link:', link);
        return Response.json(link);
      } else {
        console.error('Erro no upload para o S3. Status:', s3Response.$metadata.httpStatusCode);
        throw new Error('Erro no upload para o S3');
      }
    } catch (error) {
      console.error('Erro no upload:', error);
      return Response.json({ error: `Erro no upload: ${error.message}` }, { status: 500 });
    }
  }

  console.log('Nenhum arquivo recebido para upload');
  return Response.json(true);
}
