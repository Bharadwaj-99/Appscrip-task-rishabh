import React from 'react';
import styles from './FilterSection.module.css';

const FilterSection = () => {
  const filters = [
    { id: 'idealFor', name: 'IDEAL FOR' },
    { id: 'occasion', name: 'OCCASION' },
    { id: 'work', name: 'WORK' },
    { id: 'fabric', name: 'FABRIC' },
    { id: 'segment', name: 'SEGMENT' },
    { id: 'suitableFor', name: 'SUITABLE FOR' },
    { id: 'rawMaterials', name: 'RAW MATERIALS' },
    { id: 'pattern', name: 'PATTERN' }
  ];

  return (
    <aside className={styles.filterSection}>
      <div className={styles.customizable}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.checkboxText}>Customizable</span>
        </label>
      </div>
      <hr className={styles.divider} />
      {filters.map(filter => (
        <div key={filter.id} className={styles.filterGroup}>
          <h3 className={styles.filterTitle}>
            {filter.name}
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9090b7ac2588a5f230d3597dcb0514f8bc0d6981785bbbc942be585a1d109cc7?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.expandIcon} />
          </h3>
          <div className={styles.filterOptions}>All</div>
          <hr className={styles.divider} />
        </div>
      ))}
    </aside>
  );
};

export default FilterSection;