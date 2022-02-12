export interface Connection {
  id?: string;
  dateAdded?: Date;
};

export interface ConnectionCollection {
  id?: string;
  connection?: Connection;
}
