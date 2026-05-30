export interface Image {
  src: string;
  alt: string;
  title: string;
  aspect: number;
}

export const heroImage: Image = {
  src: "/images/thumb.jpg",
  alt: "Hero photograph",
  title: "Everyday Moments",
  aspect: 16 / 9,
};

export const galleryImages: Image[] = [
  {
    src: "/images/frame-01.jpg",
    alt: "Gallery photo 1",
    title: "Frame 01",
    aspect: 4 / 5,
  },
];
