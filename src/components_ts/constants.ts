import { PropType } from "vue";

export enum Url {
  MyProfile = 'https://github.com/touero',
  ThisRepo = 'https://github.com/touero/MonicaOmniApi',
  Backend = 'https://github.com/touero/opsariichthys-bidens'
};

export const linkButtonProps = {
  href: {
    type: String as PropType<string>,
    required: true
  },
  iconSrc: {
    type: String as PropType<string>,
    required: true
  },
  label: {
    type: String as PropType<string>,
    required: true
  },
  left: {
    type: String as PropType<string>,
    default: '4'
  }
};

export const urlIsClickDiv = {
  urlIsClick: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  text: {
    type: String as PropType<string>,
    required: true,
  },
};

export type urlIsClickDivProps = {
  urlIsClick: boolean;
  text: string;
};

export interface ApiResult {
  name: string;
  url: string;
  method: string;
  desc: string;
};

export const dataTest: ApiResult[] = [
  { name:"example", url: "https://api.example.com/endpoint", method: "POST", desc:'example1' },
  { name:"somewebsite", url: "https://api.somewebsite.org/endpoint", method: "POST", desc:'example2' },
  { name:"test", url: "https://api.test.com/endpoint", method: "GET", desc:'example3' },
  { name:"anotherdomain", url: "https://api.anotherdomain.net/endpoint", method: "POST", desc:'example4' },
  { name:"fakesite", url: "https://api.fakesite.info/endpoint", method: "POST", desc:'example5' },
  { name:"randomdomain", url: "https://api.randomdomain.com/endpoint", method: "POST", desc:'example6' },
  { name:"touero", url: "https://api.touero.com/endpoint", method: "GET", desc:'example7' },
]