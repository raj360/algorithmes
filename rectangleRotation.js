function rectangleRotation(a, b) {
  /* If we mark the inner points based on (E)ven and (O)dd 
   Manhatten distance from the origin. We end up with 
   an odd and an even rectangle. For example with (6,4):
   
  4 3 2 1 0 1 2 3 4
  
  3         E
           / \
  2       E O E
         / / \ \
  1     E O E O E  
       / /   / /
  0   E O E O E
     / /   / /
  1 E O E O E
     \ \ / /
  2   E O E
       \ / 
  3     E
  
  4

  To get the whole number of points, we just need to:
  1. Find the dimension of the even rectangle (5 by 3)
  2. Find the dimensions of the odd rectangle (4 by 2)
  3. Multiply and add together (5*3) + (4*2) = 23
  
  To find the dimensions of the even rectangle we can count 
  the number of hops of length sqrt(2) that it takes to start
  at the origin and move North-East until we reach the edge 
  of the rectangle (half of a). Multiply by two, but subtract 
  one so we don't double count the origin. Repeat North-West.
  
  To find the dimensions of the odd rectangle we can start
  by walking one grid point East if we can. (we can do this
  since a and b are both >= 2). Doing so, takes us just a 
  little bit closer to the top right side of the 
  rectangle (by 1/sqrt(2)). From this point see how many
  North-East hops of length sqrt(2) it takes to reach the edge 
  of the rectangle (half of a). Mutliply by two. 
  Repeat South-East.
*/

  const ceil = Math.ceil;
  const sqrt2 = Math.sqrt(2);
  const invSqrt2 = 1 / sqrt2;
  const halfA = a / 2;
  const halfB = b / 2;

  const evenDimension1 = ceil(halfA / sqrt2) * 2 - 1;
  const evenDimension2 = ceil(halfB / sqrt2) * 2 - 1;

  const evenPoints = evenDimension1 * evenDimension2;

  const oddDimension1 = ceil((halfA - invSqrt2) / sqrt2) * 2;
  const oddDimension2 = ceil((halfB - invSqrt2) / sqrt2) * 2;

  const oddPoints = oddDimension1 * oddDimension2;

  return oddPoints + evenPoints;
}
