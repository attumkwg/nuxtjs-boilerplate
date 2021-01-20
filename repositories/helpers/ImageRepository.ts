import Repository from '~/repositories/Repository'
import { UploadedImage } from '~/models/helpers/Image'

export const addImageBlobHook = (blob: Blob, callback: Function) => {
  const data = new FormData()
  data.append('image', blob)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  Repository.post('/files/upload', data, config)
    .then(res => {
      const uploadedImage: UploadedImage = res.data.data
      callback(uploadedImage.url, '')
    })
    .catch(err => {
      alert(JSON.stringify(err))
    })
}
