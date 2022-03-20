import { diskStorage, Options } from "multer";
import { resolve } from 'path';
import { randomBytes } from 'crypto';

export const multerConfig = {
  dest: resolve(__dirname, '..', '..', 'uploads'),
  storage: diskStorage({
    destination: (request, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'))
    },
    filename: (request, file, callback) => {
      randomBytes(16, (error, hash) => {
        if (error) {
          callback(error, file.filename);
        }

        const filename = `${hash.toString('hex')}_${file.originalname}`;
        callback(error, filename);
      })
    }
  }),
  fileFilter: (request, file, callback) => {
    const formats = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/svg'
    ];

    if (formats.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Formato não suportado!'))
    }
  }
} as Options