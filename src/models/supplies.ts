import { writeFile, readFile } from "jsonfile"

class SuppliesModel {
    static async write(data) {
        try {
          await writeFile("./src/database/supplies.json", data)

          return true
        } catch (error) {
          throw error
        }
      }
    
    static async read() {
        try {
          const db = await readFile("./src/database/supplies.json")

          return db
        } catch (error) {
          throw error
        }
      }
}

export default SuppliesModel