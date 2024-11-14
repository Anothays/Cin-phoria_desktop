import { HydraMember } from "./ApiResponseType";
import { ProjectionRoomType } from "./ProjectionRoomType";

export interface IncidentType extends HydraMember {
  "@id": string;
  "@type": string;
  "@context": string;
  id: number;
  description: string;
  resolved: boolean
  createdAt: Date;
  updatedAt: Date;
  projectionRoom: ProjectionRoomType;
}