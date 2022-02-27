export interface Connection {
  id?: string;
  name?: string;
  dateAdded?: any;
};

export interface ConnectionCollection {
  id?: string;
  connection?: Connection;
}
