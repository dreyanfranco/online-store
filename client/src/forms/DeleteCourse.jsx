import React, { useState } from 'react';
import { deleteCourse } from '../services/courses.service';
const DeleteCourse = ({ courseId }) => {
    const [status, setStatus] = useState('idle');

    const handleDeleteCourse = async () => {
        const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este curso?');
        if (confirmDelete) {
            try {
                await deleteCourse(courseId);
                setStatus('success');
                navigate('/profile');
            } catch (error) {
                console.error('Error deleting course', error);
                setStatus('error');
            }
        }
    };

    if (status === 'loading') {
        return <p>Eliminando curso...</p>;
    } else if (status === 'success') {
        return <p>Curso eliminado con éxito.</p>;
    } else if (status === 'error') {
        return <p>Error al eliminar el curso. Por favor, inténtalo de nuevo.</p>;
    } else {
        return <button onClick={handleDeleteCourse}>Eliminar curso</button>;
    }
};

export default DeleteCourse;