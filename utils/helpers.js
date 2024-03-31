const fs = require('fs').promises;
const path = require('path');




async function appendTaskToFile(taskData) {
  const filePath = path.join(__dirname, '../seeds', 'taskData.json');

  try {
      const dataRaw = await fs.readFile(filePath, 'utf8');
      const tasks = JSON.parse(dataRaw);

      tasks.push(taskData);
      await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf8');
  } catch (error) {
      console.error("Failed to append task to file:", error);
      throw error; 
  }
}



module.exports = { appendTaskToFile };