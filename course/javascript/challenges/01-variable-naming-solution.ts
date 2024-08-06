// Nomenclatura de variáveis
type CategoryType = 'User' | 'Friendly' | 'Famous' | 'Super Star';

interface Category {
  title: CategoryType;
  followers: number;
}

interface User {
  username: string;
  category: CategoryType | undefined;
}

interface getUserDto {
  username: string;
}

interface Request {
  query: getUserDto;
}

const categories: Category[] = [
    {
      title: 'User',
      followers: 5
    },
    {
      title: 'Friendly',
      followers: 50,
    },
    {
      title: 'Famous',
      followers: 500,
    },
    {
      title: 'Super Star',
      followers: 1000,
    },
  ]
  
export default async function getUser(req: Request, res: any): Promise<User> {
  const username = String(req.query.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubResponse = await fetch(`https://api.github.com/users/${username}`);

  if (githubResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`
    })
  }

  const user = await githubResponse.json()

  const categoriesOrderedByFollowers = categories.sort((currentCategory, nextCategory) =>  nextCategory.followers - currentCategory.followers); 

  const userCategory = categoriesOrderedByFollowers.find(category => user.followers > category.followers)

  const result = {
    username,
    category: userCategory?.title
  }

  return result
}

getUser({ query: {
  username: 'josepholiveira'
}}, {})