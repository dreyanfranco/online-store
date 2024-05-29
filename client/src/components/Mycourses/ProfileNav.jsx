import React from 'react'
import { Link } from 'react-router-dom'


const ProfileNav = () => {
    return (
        <>

            <nav className='d-flex justify-content-center'>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        <Link to="/profile" className='text-white'>Ver perfil</Link>
                    </button>

                    <button class="nav-link" id="nav-createdCourses-tab" data-bs-toggle="tab" data-bs-target="#nav-createdCourses" type="button" role="tab" aria-controls="nav-createdCourses" aria-selected="true">
                        <Link to="/profile/createdCourses" className='text-white'>Cursos Creados</Link>
                    </button>

                    <button class="nav-link" id="nav-newCourse-tab" data-bs-toggle="tab" data-bs-target="#nav-newCourse" type="button" role="tab" aria-controls="nav-newCourse" aria-selected="false">
                        <Link to="/profile/newcourse" className='text-white'>Crear curso</Link>
                    </button>
                    <button class="nav-link" id="nav-wishlist-tab" data-bs-toggle="tab" data-bs-target="#nav-wishlist" type="button" role="tab" aria-controls="nav-wishlist" aria-selected="false">
                        <Link to="/profile/..." className='text-white'>Favoritos</Link>
                    </button>

                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="nav-createdCourses" role="tabpanel" aria-labelledby="nav-createdCourses-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="nav-newCourse" role="tabpanel" aria-labelledby="nav-newCourse-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="nav-wishlist" role="tabpanel" aria-labelledby="nav-wishlist-tab" tabindex="0">...</div>
            </div>
        </>
    )
}

export default ProfileNav