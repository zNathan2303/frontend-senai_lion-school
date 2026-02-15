export async function getStudentsByClassId(classId) {
  const response = await fetch(`https://lion-school-phbo.onrender.com/alunos?curso_id=${classId}`)
  const data = await response.json()
  return data
}

export async function getClasses() {
  const response = await fetch('https://lion-school-phbo.onrender.com/cursos')
  const data = await response.json()
  return data
}

export async function getStudentDetails(studentId) {
  const response = await fetch(`https://lion-school-phbo.onrender.com/alunos/${studentId}`)
  const data = await response.json()
  return data
}