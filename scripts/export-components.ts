import { readdirSync, writeFile } from 'fs'

const loadFolder = async (folder: string) =>
  new Promise(resolve => {
    try {
      const getFolderNames = readdirSync(folder)
      resolve(getFolderNames)
    } catch (e) {}
  })

const toFile = async (data: string, folder: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    writeFile(folder, data, err => {
      if (err) {
        console.error('Error writing file:', err)
        return reject(err)
      }
      resolve()
    })
  })
}

const exportComponents = async () => {
  const exportFiles = async (pathAddress: string) => {
    const data = []
    const folder = await loadFolder(pathAddress)

    for (const folderItem of folder as string) {
      if (
        !folderItem.includes('.') &&
        !folderItem.includes('_') &&
        !folderItem.includes('index.tsx') &&
        !folderItem.includes('extra')
      ) {
        data.push(`export * from './${folderItem}'`)
      }

      if (!folderItem.includes('_')) exportFiles(`${pathAddress}/${folderItem}`)
    }

    if (data.length > 0) {
      await toFile(data.join('\n'), `${pathAddress}/index.ts`)
    }
  }

  await exportFiles(`${__dirname}/../src/atomic`)
}

exportComponents()
