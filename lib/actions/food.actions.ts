import { GetAllFoodsParams } from "@/types";
import connectToNeo4j from "../neo4j";
import { handleError } from "../utils";

export async function getAllFoods({ query, limit = 6, page = 1, classification = 'All', healthy = 'All' }: GetAllFoodsParams) {
  try {

    const skipAmount = (page - 1) * limit; // Aseguramos que skipAmount sea un entero

    const driver = await connectToNeo4j();
    const session = driver.session();

    let cypherQuery = 'MATCH (f:Food) WHERE 1=1';
    const params: any = {};

    if (query) {
      cypherQuery += ' AND f.name CONTAINS $query';
      params.query = query;
    }
    if (classification !== 'All') {
      cypherQuery += ' AND f.classification = $classification';
      params.classification = classification;
    }
    if (healthy !== 'All') {
      cypherQuery += ' AND f.healthiness = $healthy';
      params.healthy = healthy;
    }

    // Incorporamos los valores de limit y skipAmount directamente en la consulta
    cypherQuery += ` RETURN f SKIP ${skipAmount} LIMIT ${limit}`;

    const result = await session.run(cypherQuery, params);
    const foods = result.records.map((record: any) => {
      const food = record.get('f');
      return { ...food.properties, id: food.identity.toNumber() };
    });

    // Count total foods for pagination
    let countQuery = 'MATCH (f:Food) WHERE 1=1';
    if (query) {
      countQuery += ' AND f.name CONTAINS $query';
    }
    if (classification !== 'All') {
      countQuery += ' AND f.classification = $classification';
    }
    if (healthy !== 'All') {
      countQuery += ' AND f.healthiness = $healthy';
    }
    countQuery += ' RETURN count(f) as count';

    const countResult = await session.run(countQuery, params);
    const totalFoods = countResult.records[0].get('count').toNumber();
    await session.close();

    return {
      data: foods,
      totalPages: Math.ceil(totalFoods / limit),
    };
  } catch (error) {
    handleError(error);
    throw error; // Es importante relanzar el error para manejo adecuado
  }
}

export const getFoodById = async (id: number) => {
  try {
      const driver = await connectToNeo4j();
      const session = driver.session();
      const result = await session.run(
          `MATCH (n:Food) WHERE ID(n) = $id RETURN n`,
          { id }
      );
      await session.close();
      
      return result.records.map(( record: any ) =>  { return {...record.toObject().n.properties, id: record.toObject().n.identity.toNumber()}});
  } catch (error) {
      handleError(error);
  }
}
