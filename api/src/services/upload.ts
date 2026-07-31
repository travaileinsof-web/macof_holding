import { put, del, list } from '@vercel/blob';
import { config } from '../config';

export async function uploadFile(file: File, folder: string): Promise<string> {
  const timestamp = Date.now();
  const ext = file.name.split('.').pop() || 'bin';
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const key = `${folder}/${timestamp}_${sanitizedName}`;

  const blob = await put(key, file, {
    access: 'public',
    addRandomSuffix: true,
    token: config.blobToken || undefined,
  });

  return blob.url;
}

export async function deleteFile(url: string): Promise<void> {
  try {
    await del(url, { token: config.blobToken || undefined });
    console.log(`File deleted: ${url}`);
  } catch (error) {
    console.error(`Failed to delete file at ${url}:`, error);
    throw new Error(`Impossible de supprimer le fichier`);
  }
}

export async function listFiles(folder: string): Promise<{ url: string; name: string; size: number; uploadedAt: Date }[]> {
  try {
    const blobs = await list({
      prefix: folder,
      token: config.blobToken || undefined,
    });

    return blobs.blobs.map((blob) => ({
      url: blob.url,
      name: blob.pathname,
      size: blob.size,
      uploadedAt: new Date(blob.uploadedAt),
    }));
  } catch (error) {
    console.error(`Failed to list files in ${folder}:`, error);
    throw new Error(`Impossible de lister les fichiers du dossier ${folder}`);
  }
}
