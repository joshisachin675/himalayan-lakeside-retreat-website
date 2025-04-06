
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { imageGallery, ImageItem } from "@/data/imageData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    
    const currentIndex = imageGallery.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % imageGallery.length;
    setSelectedImage(imageGallery[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    
    const currentIndex = imageGallery.findIndex(img => img.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + imageGallery.length) % imageGallery.length;
    setSelectedImage(imageGallery[previousIndex]);
  };

  return (
    <Layout>
      <PageHeader
        title="Explore Uttarakhand"
        subtitle="Discover the breathtaking beauty of mountains, lakes, and culture"
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Visual Journey Through Uttarakhand
            </h2>
            <p className="text-lg text-gray-700">
              Explore the stunning landscapes, serene lakes, ancient temples, and luxurious amenities that make our region a paradise for nature lovers and comfort seekers alike.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger value="mountains" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Mountains
                </TabsTrigger>
                <TabsTrigger value="lakes" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Lakes
                </TabsTrigger>
                <TabsTrigger value="temples" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Temples
                </TabsTrigger>
                <TabsTrigger value="hotel" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Hotel
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {imageGallery.map((image) => (
                  <GalleryItem key={image.id} image={image} onClick={() => handleImageClick(image)} />
                ))}
              </div>
            </TabsContent>

            {["mountains", "lakes", "temples", "hotel"].map((category) => (
              <TabsContent key={category} value={category} className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {imageGallery
                    .filter((image) => image.category === category)
                    .map((image) => (
                      <GalleryItem key={image.id} image={image} onClick={() => handleImageClick(image)} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-black/90 border-none">
          <div className="relative">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 z-10"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
            
            {selectedImage && (
              <>
                <div className="flex justify-center items-center h-[80vh]">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <button
                    onClick={handlePrevious}
                    className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
                    aria-label="Previous image"
                  >
                    <ArrowLeft size={24} />
                  </button>
                </div>
                
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <button
                    onClick={handleNext}
                    className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
                    aria-label="Next image"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
                
                <div className="bg-black/80 p-4 text-white">
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                  {selectedImage.description && <p className="mt-1 text-gray-300">{selectedImage.description}</p>}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Discover Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Discover the Region
            </h2>
            <p className="text-lg text-gray-700">
              Uttarakhand is a treasure trove of natural wonders and cultural landmarks just waiting to be explored.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RegionCard
              title="Mountain Peaks"
              description="Explore the majestic snow-capped peaks that surround our property, offering breathtaking views and trekking opportunities."
              image="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            />
            <RegionCard
              title="Pristine Lakes"
              description="Discover the serene beauty of Naini Lake, Bhimtal, Sattal, and Khurpatal, each with its unique charm and activities."
              image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            />
            <RegionCard
              title="Ancient Temples"
              description="Visit centuries-old temples that showcase the rich spiritual heritage and architectural brilliance of the region."
              image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
            />
            <RegionCard
              title="Local Wildlife"
              description="Encounter diverse flora and fauna in the nearby wildlife sanctuaries and nature reserves."
              image="https://images.unsplash.com/photo-1472396961693-142e6e269027"
            />
            <RegionCard
              title="Cultural Heritage"
              description="Experience the vibrant local culture through traditional music, dance, cuisine, and crafts."
              image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
            />
            <RegionCard
              title="Adventure Activities"
              description="Indulge in thrilling activities like paragliding, rock climbing, and river rafting in the surrounding areas."
              image="https://images.unsplash.com/photo-1533240332313-0db49b459ad6"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface GalleryItemProps {
  image: ImageItem;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  return (
    <div 
      className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="gallery-img group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
        <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-bold text-lg">{image.title}</h3>
          {image.description && <p className="text-sm">{image.description}</p>}
        </div>
      </div>
    </div>
  );
};

interface RegionCardProps {
  title: string;
  description: string;
  image: string;
}

const RegionCard: React.FC<RegionCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="gallery-img"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Gallery;
