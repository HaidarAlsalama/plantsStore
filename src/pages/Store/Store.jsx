import Navbar from "../../components/Navbar/Navbar";
import PlantsCard from "../../components/PlantsCard/PlantsCard";

const plants = [
  {
    name: "Snake Plant",
    price: 15,
    description: "Produces oxygen at night, improving air quality.",
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    name: "Spider Plant",
    price: 12,
    description: "Filters formaldehyde and xylene from the air.",
    image:
      "https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8=",
  },
  {
    name: "Peace Lily",
    price: 18,
    description: "Removes mold spores and purifies the air.",
    image:
      "https://media.istockphoto.com/id/1401702743/photo/3d-illustration-of-houseplant-potted-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=v81_OT9i1b7Q61UQF8OOJKcru_T3VK8Jb4zLCWI-qoI=",
  },
  {
    name: "Boston Fern",
    price: 20,
    description: "Natural air humidifier and purifier.",
    image:
      "https://media.istockphoto.com/id/526039805/photo/lucky-bamboo.jpg?s=612x612&w=0&k=20&c=SRzAEWUmzCYxGL2xs_gh9nIl-iZ2UeU5QYoXMZ-wADM=",
  },
  {
    name: "Rubber Plant",
    price: 25,
    description: "Eliminates air toxins and improves air quality.",
    image:
      "https://media.istockphoto.com/id/1330360581/photo/indoor-plants-in-pot-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=Byyvv4tN8wKw1O3JtyRq7O-Cts8KiYVFsDUo3Vsv8cM=",
  },
  {
    name: "Aloe Vera",
    price: 10,
    description: "Absorbs air pollutants and releases oxygen.",
    image:
      "https://static4.depositphotos.com/1026290/368/i/450/depositphotos_3682375-stock-photo-houseplant.jpg",
  },
];

export default function PlantCatalog() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Air Purifying Plants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plants.map((plant, index) => (
            <PlantsCard
              key={index}
              id={index + 1}
              name={plant.name}
              description={plant.description}
              image={plant.image}
              price={plant.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
