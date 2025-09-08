import React, { useState } from 'react';
import './Publication.css';
import heroImage from '../../assets/histo/history image.jpg';

const Publication = () => {
  const [activeFilter, setActiveFilter] = useState('Show All');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const publications = [
    {
      id: 1,
      author: "Khamis Alphan",
      title: "The effects of a solution-focused model discharge readiness coaching intervention...",
      type: "Journal Article",
      date: "2025-05-23",
    },
    {
      id: 2,
      author: "Yahya",
      title: "A study on sustainable marine resources and community resilience",
      type: "Conference Paper",
      date: "2025-04-10",
    },
    {
      id: 3,
      author: "Yusra Alphan",
      title: "Climate change adaptation in coastal communities",
      type: "Journal Article",
      date: "2025-03-18",
    },
    {
      id: 4,
      author: "Jumaa",
      title: "The role of youth in ocean conservation and sustainability",
      type: "Book Chapter",
      date: "2025-02-11",
    },
  ];

  // ✅ Apply filter
  const filteredPublications =
    activeFilter === 'Show All'
      ? publications
      : publications.filter(
          (pub) => pub.author.charAt(0).toUpperCase() === activeFilter
        );

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>OUR PRIDE PUBLICATIONS</h1>
          <div className="breadcrumb">
            {/* ✅ Better use React Router later */}
            <a href="/">HOME</a> <span>&gt;</span>
            <span>PUBLICATIONS</span>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <div className="publications-container">
        <h1>Explore Publications</h1>

        {/* Alphabet Filters */}
        <div className="alphabet-filters">
          {alphabet.map((letter) => (
            <button
              key={letter}
              className={`filter-btn ${
                activeFilter === letter ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(letter)}
            >
              {letter}
            </button>
          ))}
          <button
            className={`filter-btn ${
              activeFilter === 'Show All' ? 'active' : ''
            }`}
            onClick={() => setActiveFilter('Show All')}
          >
            Show All
          </button>
        </div>

        {/* Publications Table */}
        <div className="table-container">
          <table className="publications-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Author</th>
                <th>Title</th>
                <th>Type</th>
                <th>Date Published</th>
              </tr>
            </thead>
            <tbody>
              {filteredPublications.length > 0 ? (
                filteredPublications.map((pub) => (
                  <tr key={pub.id}>
                    <td>{pub.id}</td>
                    <td className="author-cell">{pub.author}</td>
                    <td className="title-cell">{pub.title}</td>
                    <td>{pub.type}</td>
                    <td>{pub.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>
                    No publications found for "{activeFilter}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Publication;
