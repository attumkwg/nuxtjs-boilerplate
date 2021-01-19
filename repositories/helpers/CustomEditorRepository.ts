import Repository from '~/repositories/Repository'

class CustomEditorRepository {
  addImageBlobHook = (blob: Blob, callback: Function) => {
    const data = new FormData()
    data.append('image', blob)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    Repository.post('', data, config)
      .then(res => {
        callback(res.data.url, '')
      })
      .catch(() => {
        alert('zannen')
      })
  }
}

export default CustomEditorRepository
