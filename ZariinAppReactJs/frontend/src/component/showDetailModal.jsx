export default function ShowDetailModal({ open, onClose, job }) {
  if (!open) return null;

  return (
    <div className="modal">
      <h2>{job.hiringPosition}</h2>
      <p><strong>Company:</strong> {job.companyName}</p>
      <p><strong>Location:</strong> {job.address}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>hourlyPay:</strong> {job.hourlyPay.toFixed(2)} $</p>

      <button onClick={onClose}>Close</button>
    </div>
  );
}
