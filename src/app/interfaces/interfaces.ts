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
  curriculumVitae: CurriculumVitae;
}

export interface CurriculumVitae {
  id: number;
  description: string;
  training: Training[];
}

export interface Training {
  id: number;
  company: string;
  appointment: string;
  city: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  current: boolean;
  information: string;
  typeTraining: TypeTraining;
}

export interface TypeTraining {
  id: number;
  name: string;
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
