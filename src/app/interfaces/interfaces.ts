import { type } from "os"

// INTERFACES
export interface Course {
    courseId: number;
    modules: ModuleId[]; // Jko: '(string | number)[]' isn't a better way to solve it?
    title: string;
    description: string;
    imgUrl: string;
    route: string;
    learners?: number;
    tags: string[]; // Jko: Changed 'Tag[]' to 'string[]'
}

export interface Module {
    moduleId: number;
    topic: Topic[];
    title: string;
    description: string;
    imgUrl: string;
    route: string;
    courseId: number;
}

export interface Topic {
    topicId: number;
    title: string;
    card?: number;
    position: number;
    moduleId: number;
    cardId: number;
    cardType: CardTypes;
}

// TYPES
export type Video = {
    videoId: number;
    videoUrl: string;
    subTitle: string;
}

export type Text = {
    textId: number;
    text: string;
}

export type List = {
    listId: number,
    subTitle: string[]
}

export type Test = {
    testId: number
    items: ItemTest[],
}

export type Error = {
    message: string,
    code: number
}

export type ItemTest = {
    answer: string,
    right: boolean
}

export type Tag = {
    id: number,
    name: string,
    color: string
}

export type ModuleId = {
    modId: number;
    modName?: string;
}

export type Topics = {
    topicId?: number;
    topicName: string;
}

export type Usuari = {
    email: string;
    userId: UserId;
    userName: string;
    userScore: number;
}

export type Retos = {
    retoId: string;
    usuarioQueReta: UserId; 
    usuarioRetado: UserId;
    puntosApostados: number;
}

// Jko: Is it a good practice to declare a 'userId' type? 
export type UserId = {
    userId: number;
}


// ENUMS
export enum CardTypes {
    Video,
    Text,
    List,
    Test
}

