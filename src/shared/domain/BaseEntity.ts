import { randomUUID } from "node:crypto";

export abstract class BaseEntity<T> {
  protected _id: string;
  protected _createdAt: Date;
  protected _updatedAt: Date;
  protected _data: T;

  constructor(data: T, id?: string, createdAt?: Date, updatedAt?: Date) {
    this._id = id || randomUUID();
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
    this._data = data;
  }

  get id(): string {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get<K extends keyof T>(key: K): T[K] {
    return this._data[key];
  }

  set<K extends keyof T>(key: K, value: T[K]): void {
    this._data[key] = value;
    this._updatedAt = new Date();
  }

  toJSON(): T & { id: string; createdAt: Date; updatedAt: Date } {
    return {
      ...this._data,
      id: this._id,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt
    };
  }

  update(updates: Partial<T>): void {
    //@ts-ignore
    Object.assign(this._data, updates);
    this._updatedAt = new Date();
  }
}
