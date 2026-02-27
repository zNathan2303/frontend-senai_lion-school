import { getClasses, getStudentDetails, getStudentsByClassId } from "./lion-school-api.js"

function validarArray(array) {
  expect(Array.isArray(array)).toBe(true)
}

const formatoDoAluno = {
  id: expect.any(Number),
  nome: expect.any(String),
  curso_id: expect.any(Number),
  foto: expect.any(String),
  desempenho: expect.any(Array)
}

const formatoDaMateria = {
  categoria: expect.any(String),
  valor: expect.any(Number)
}

test('Verifica se getClasses retorna a lista de classes', async () => {
  const formatoDaTurma = {
    id: expect.any(Number),
    nome: expect.any(String),
    sigla: expect.any(String)
  }

  const turmas = await getClasses()

  validarArray(turmas)

  turmas.forEach(turma => {
    expect(turma).toEqual(expect.objectContaining(formatoDaTurma))
  })
})

test('Verifica se getStudentsByClassId retorna a lista de alunos para uma classe específica', async () => {
  const alunos = await getStudentsByClassId(1)

  validarArray(alunos)

  alunos.forEach(aluno => {
    // Verificar campos do aluno
    expect(aluno).toEqual(expect.objectContaining(formatoDoAluno))

    // Verificar campos de cada item do desempenho do aluno
    aluno.desempenho.forEach(materia => {
      expect(materia).toEqual(expect.objectContaining(formatoDaMateria))
    })
  })
})

test('Verifica se getStudentDetails retorna os detalhes de um aluno específico', async () => {
  const aluno = await getStudentDetails(1)

  // Verificar campos do aluno
  expect(aluno).toEqual(expect.objectContaining(formatoDoAluno))

  // Verificar campos de cada item do desempenho do aluno
  aluno.desempenho.forEach(materia => {
    expect(materia).toEqual(expect.objectContaining(formatoDaMateria))
  })
})