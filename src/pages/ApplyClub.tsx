import React, { useRef } from 'react';
import { toast } from '@/components/ui/sonner';

const ApplyClub = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xdkggdnq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      if (response.ok) {
        toast('Application submitted! We will review and get back to you.');
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors && Array.isArray(data.errors)) {
          toast(data.errors.map(e => e.message).join(', '));
        } else {
          toast('There was a problem submitting your application. Please try again.');
        }
      }
    } catch (err) {
      toast('There was a problem submitting your application. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow mt-12 mb-12">
      <h2 className="text-3xl font-bold text-center">Apply to List Your Club 🥾</h2>
      <p className="text-center text-gray-600">Tell us about your hiking group! We'll review and get back to you shortly.</p>

      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-6"
      >
        <div>
          <label htmlFor="clubName" className="block mb-2 font-medium">Club Name *</label>
          <input type="text" id="clubName" name="clubName" required className="w-full border border-gray-300 p-3 rounded-lg" placeholder="e.g., Bay Area Women Hikers" />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-medium">Short Description *</label>
          <textarea id="description" name="description" required maxLength={300} rows={4} className="w-full border border-gray-300 p-3 rounded-lg" placeholder="Tell us a little about your group..."></textarea>
        </div>

        <div>
          <label htmlFor="clubType" className="block mb-2 font-medium">Club Type *</label>
          <select id="clubType" name="clubType" required className="w-full border border-gray-300 p-3 rounded-lg">
            <option value="">Select Type</option>
            <option value="Casual">Casual</option>
            <option value="Challenging">Challenging</option>
            <option value="Family-Friendly">Family-Friendly</option>
            <option value="Women-Only">Women-Only</option>
            <option value="Eco-Conservation">Eco-Conservation</option>
          </select>
        </div>

        <div>
          <label htmlFor="locations" className="block mb-2 font-medium">Locations Served *</label>
          <input type="text" id="locations" name="locations" required className="w-full border border-gray-300 p-3 rounded-lg" placeholder="e.g., San Francisco, East Bay" />
        </div>

        <div>
          <label htmlFor="frequency" className="block mb-2 font-medium">Meeting Frequency *</label>
          <select id="frequency" name="frequency" required className="w-full border border-gray-300 p-3 rounded-lg">
            <option value="">Select Frequency</option>
            <option value="Weekly">Weekly</option>
            <option value="Biweekly">Biweekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label htmlFor="website" className="block mb-2 font-medium">Club Website or Meetup Link *</label>
          <input type="url" id="website" name="website" required className="w-full border border-gray-300 p-3 rounded-lg" placeholder="https://example.com" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Contact Email *</label>
          <input type="email" id="email" name="email" required className="w-full border border-gray-300 p-3 rounded-lg" placeholder="you@example.com" />
        </div>

{/*         <div>
          <label htmlFor="image" className="block mb-2 font-medium">Upload Club Image (Optional)</label>
          <input type="file" id="image" name="image" accept="image/png, image/jpeg" className="w-full" />
        </div> */}

        <button type="submit" className="w-full bg-[#0077B6] text-white p-3 rounded-lg hover:bg-[#005F8C] transition">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyClub; 