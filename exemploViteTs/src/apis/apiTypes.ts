export type DevType = {
  id?: number,
  nome: string,
  email: string,
  tecnologias: string,
  nivel: Nivel,
  salario: number,
}

enum Nivel {
  JUNIOR = 'junior',
  PLENO = 'pleno',
  SENIOR = 'senior',
}


export type ResponseType = {
  message: string,
  code: number,
  dev?: DevType,
  devs?: DevType[],
}


export type RequestEmailType = {
  email: string
}
