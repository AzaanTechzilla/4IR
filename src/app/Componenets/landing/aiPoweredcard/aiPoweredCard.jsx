export default function AiPoweredCard({ items, key, className }) {
  return (
    <>
      <div class={`aiPoweredIndustries-card ${className}`} key={key}>
        <div class="card-content">
          <img src={items.image} alt="Real Estate" class="card-image" />
          <h3>{items.title}</h3>
        </div>
        <div class="card-details">
          <h3>{items.title}</h3>
          <p>{items.para}</p>
        </div>
      </div>
    </>
  )
} 