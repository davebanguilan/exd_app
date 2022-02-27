export type ModalAlert = {
  header: string;
  alertMessage: string;
  cssClass?: string | string[];
  button?: ModalAlertButton[];
};


export type ModalAlertButton = {
  text: string;
  handler?: () => void;
};

