# React Cheatsheet (M294)

## Use-State mit Arrays

### Neues Element

````Javascript
setStudents([...students, student]);
````

### Element löschen

````Javascript
setStudents(students.filter((student) => student.id !== id));
````

### Liste leeren

````Javascript
setStudents([]);
````

## Use-State mit Objekten

````Javascript
setUser({ ... user, [e.target.name]: e.target.value})
````

## Fetch

### Liste

````Javascript
const [posts, setPosts] = useState([]);

useEffect(() => {
  const loadPosts = async () => {
    const response = await fetch(URL)
    const posts = await response.json();
    setPosts(posts)
  };
  
  loadPosts();
}, []) 
````

### Detail

````Javascript
const router = useRouter();
const { id } = router.query;
  
const [post, setPost] = useState(null);

useEffect(() => {
  if (!id) return;
  const loadPost = async () => {
    const response = await fetch(`${URL}/${id}`);
    const post = await response.json();
    setPost(post);
  };
  
  loadPost();
}, [id]);

return (
  {post && (
    ...
  )}
);
````

### Error-Handling und Optionen

````Javascript
export async function createTodo(todo, token) {
     const response = await fetch(`/todos`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(todo)
    });
    if (!response.ok) {
       throw new Error(response.statusText)
    }
    return await response.json();
}
````

## Formulare

````Javascript
const defaultModel = {
  title: '',
  text: '',
};

function validate(post) {
  const errors = {
    title: '',
    text: '',
  };
  let isValid = true;

  if (!post.title || post.title.trim() === '') {
    errors.title = 'Title is required';
    isValid = false;
  }

  if (!post.text || post.text.trim() === '') {
    errors.text = 'Text is required';
    isValid = false;
  }

  return { errors, isValid };
}

export default function PostForm({ postToEdit }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(defaultModel);
  const [post, setPost] = useState(defaultModel);
  const { session } = useSession();

  useEffect(() => {
    if (postToEdit) {
      setPost(postToEdit);
    }
  }, [postToEdit]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(defaultModel);

    const result = validate(post);

    if (!result.isValid) {
      setErrors(result.errors);
      setIsLoading(false);
      return;
    }

    if (post.id) {
      try {
        await updatePost(post, session.token);
        await router.push('/');
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await createPost(post, session.token);
        await router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.postform}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={post.title || ''}
            onChange={handleChange}
          />
          {errors.title && (
            <small className={styles.error}>{errors.title}</small>
          )}
        </fieldset>

        <fieldset>
          <label>Text</label>
          <input
            type="text"
            name="text"
            value={post.text || ''}
            onChange={handleChange}
          />
          {errors.text && <small className={styles.error}>{errors.text}</small>}
        </fieldset>

        <button disabled={isLoading}>
          {isLoading ? '...Loading' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
````

#### Login

````Javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setErrors(defaultModel);

  const result = validateModel(post);

  if (!result.isValid) {
    setErrors(result.errors);
    setIsLoading(false);
    return;
  }

  if (post.id) {
    try {
      await updatePost(post, session.token);
      await router.push('/');
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      await createPost(post, session.token);
      await router.push('/');
    } catch (error) {
      console.error(error);
    }
  }
  setIsLoading(false);
};
````