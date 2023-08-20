export interface RespuestaApi<T> {
  code?: number;
  dateTime?: string;
  message?: string;
  data?: T;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  state: number;
  publicationDate: string;
  outstanding: boolean;
  enabled: boolean;
  company: Company;
  typeJob: Type;
  areas: Type;
  postulants: Postulants[];
}

export interface JobDetail {
  id: number;
  title: string;
  description: string;
  location: string;
  state: number;
  publicationDate: string;
  outstanding: boolean;
  enabled: boolean;
  company: Company;
  typeJob: Type;
  areas: Type;
  postulants: Postulants[];
  related: Job[];
}

export interface Company {
  id: number;
  name: string;
  description: string;
  photo: string;
  numberPhone: string;
  email: string;
  webSite: string;
  address: string;
  city: string;
  useName: boolean;
  area: Type;
}

export interface Type {
  id: number;
  name: string;
}

export interface Postulants {
  id: number;
  name: string;
  lastName: string;
  address: string;
  nacionality: string;
  gender: string;
  maritalStatus: string;
  photo: string;
  numberPhone: string;
  birthdate: string;
  student: boolean;
  curriculumVitae: string;
}

export interface CurriculumVitae {
  id: number;
  description: string;
  training: string;
}

export interface Administrator {
  id: number;
  name: string;
  lastName: string;
  address: string;
  nacionality: string;
  gender: string;
  maritalStatus: string;
  photo: string;
  numberPhone: string;
  birthdate: string;
  appointment: string;
  departament: string;

}
