export default interface IEvent {
  id: number;
  title: string;
  description: string;
  image: string;
  geolocation: string;
  startTime: string;
  endTime: string;
  publishTime: string;
  isArchived: boolean;
  secretKey: string;
  tag?: ITag,
}

export interface ITag {
  id: number;
  name: string;
}