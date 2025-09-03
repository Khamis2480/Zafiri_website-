import React, { useState } from "react";
import "./Gallery.css";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const imagesPerPage = 12;

  const sampleImages = Array.from({ length: 48 }, (_, i) => {
    const categories = ["Nature", "Urban", "Abstract", "People"];
    return {
      id: i + 1,
      src: `https://picsum.photos/300/200?random=${i + 1}`,
      title: `Image ${i + 1}`,
      description: `Description for image ${i + 1}`,
      category: categories[i % categories.length],
    };
  });

  const filteredImages = sampleImages.filter((img) => {
    const matchesCategory =
      selectedCategory === "All" || img.category === selectedCategory;
    const matchesSearch =
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleImageClick = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const handleNext = () => {
    const currentIndex = sampleImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % sampleImages.length;
    setSelectedImage(sampleImages[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = sampleImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + sampleImages.length) % sampleImages.length;
    setSelectedImage(sampleImages[prevIndex]);
  };

  return (
    <div className="photo-gallery-wrapper">
      <h1>Photo Gallery</h1>
      <p className="gallery-description">
        Browse through our collection of images. Use the filters or search box to find what you’re looking for.
      </p>

      <div className="gallery-search-box">
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="gallery-filter-buttons">
        {["All", "Nature", "Urban", "Abstract", "People"].map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn ${selectedCategory === cat ? "gallery-active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {currentImages.length > 0 ? (
          currentImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => handleImageClick(image)}
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No images found</p>
        )}
      </div>

      <div className="gallery-pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="gallery-pagination-btn"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`gallery-pagination-btn ${currentPage === i + 1 ? "gallery-active" : ""}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="gallery-pagination-btn"
        >
          Next
        </button>
      </div>

      {selectedImage && (
        <div className="gallery-modal-overlay" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close-btn" onClick={closeModal}>×</button>
            <div className="gallery-modal-image-container">
              <img src={selectedImage.src} alt={selectedImage.title} />
              <button className="gallery-nav-btn gallery-prev-btn" onClick={handlePrevious}>‹</button>
              <button className="gallery-nav-btn gallery-next-btn" onClick={handleNext}>›</button>
            </div>
            <div className="gallery-image-details">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <p>Category: {selectedImage.category}</p>
              <p>
                Image {selectedImage.id} of {sampleImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
