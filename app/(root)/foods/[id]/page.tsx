import Image from 'next/image';
import { getFoodById } from '@/lib/actions/food.actions';
import { fetchImageUrl } from '@/lib/utils'; // Asumiendo que la función fetchImageUrl está importada aquí

const page = async ({ params }) => {
  const { id } = params;
  const [food] = await getFoodById(Number(id));
  const imageUrl = await fetchImageUrl(`food ${food.name}`) || '/assets/icons/image-missing.jpg';

  return (
    <div>
      <h2>{food.name}</h2>
      <Image
        src={food.image_url}
        alt={food.name}
        width={400}
        height={400}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <div>
        <p>
          <strong>Sodio:</strong> {food.sodium_mg} mg
        </p>
        <p>
          <strong>Colesterol:</strong> {food.cholesterol_mg} mg
        </p>
        <p>
          <strong>Fibra:</strong> {food.fiber_g} g
        </p>
        <p>
          <strong>Calorías:</strong> {food.calories}
        </p>
        <p>
          <strong>Grasa Saturada:</strong> {food.fat_saturated_g} g
        </p>
        <p>
          <strong>Clasificación:</strong> {food.classification}
        </p>
        <p>
          <strong>Saludabilidad:</strong> {food.healthiness}
        </p>
        <p>
          <strong>Azúcar:</strong> {food.sugar_g} g
        </p>
        <p>
          <strong>Grasa Total:</strong> {food.fat_total_g} g
        </p>
        <p>
          <strong>Proteína:</strong> {food.protein_g} g
        </p>
      </div>
    </div>
  );
};

export default page;