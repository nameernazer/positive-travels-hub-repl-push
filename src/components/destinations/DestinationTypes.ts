
export interface DestinationType {
  region: string;
  title: string;
  image: string;
  description: string;
}

export const destinations: DestinationType[] = [
  {
    region: "asia",
    title: "Asia",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    description: "Experience ancient traditions and modern wonders"
  },
  {
    region: "europe",
    title: "Europe",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    description: "Journey through centuries of history and culture"
  },
  {
    region: "middle-east",
    title: "Middle East",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    description: "Where tradition meets luxury"
  },
  {
    region: "north-america",
    title: "North America",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    description: "From coast to coast adventures"
  },
  {
    region: "south-america",
    title: "South America",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    description: "Natural wonders and ancient civilizations"
  }
];
