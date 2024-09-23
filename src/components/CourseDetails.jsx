import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  supabase  from '../config/supabaseClient'
import { Container } from 'react-bootstrap';

function CourseDetails() {
    const { id } = useParams();

    const [fetchError, setFetchError] = useState(null);
    const [CourseDetails, setCourseDetails] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const [views, setViews] = useState("");



    useEffect(() => {
        const fetchCourse = async () => {
            const { data, error } = await supabase
            .from("courses")
            .select()
            .eq("id", id)
            .limit(1)
            .single()

    
            if (error) {
                setFetchError("Could not fetch course");
                console.log(error);
            }
            if (data) {
                setTitle(data.title);
                setDescription(data.description);

                setRating(data.rating);
                setPrice(data.price);
                setViews(data.views);
                console.log(data);
            }
        }

        fetchCourse();
    }, [id]);

  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{category}</p>
      <p>{rating}</p>
      <p>{price}</p>
      <p>{views}</p>
    </Container>
  )
}

export default CourseDetails