import React, { useState } from 'react';
import { Gem, ArrowLeft, Calendar, DollarSign } from 'lucide-react';

interface RateData {
  date: string;
  goldPrice: number;
  silverPrice: number;
}

function App() {
  const [showRates, setShowRates] = useState(false);
  const [formData, setFormData] = useState<RateData>({
    date: '',
    goldPrice: 0,
    silverPrice: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    
    const rateData: RateData = {
      date: formDataObj.get('date') as string,
      goldPrice: parseFloat(formDataObj.get('goldPrice') as string),
      silverPrice: parseFloat(formDataObj.get('silverPrice') as string)
    };

    setFormData(rateData);
    setShowRates(true);
  };

  const handleGoBack = () => {
    setShowRates(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-amber-400">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-4">
            <Gem className="text-amber-600 mr-3" size={32} />
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-roboto">
                Balaji Jewellery Mart
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 font-telugu mt-1">
                బాలాజీ జ్యువెల్లరీ మార్ట్
              </h2>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-600">
              <div className="font-roboto">
                <span className="font-semibold">Address:</span> Main Road, Nuzvid, 521201
              </div>
              <div className="font-telugu">
                <span className="font-semibold">చిరునామా:</span> మైన్ రోడ్, నూజివిడ్, 521201
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-600">
              <div className="font-roboto">
                <span className="font-semibold">Call:</span> 9440635925
              </div>
              <div className="font-telugu">
                <span className="font-semibold">కాల్:</span> 9440635925
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {!showRates ? (
          /* Input Form */
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 font-roboto mb-2">
                Gold & Silver Rate Entry
              </h3>
              <p className="text-lg text-gray-600 font-telugu">
                బంగారం మరియు వెండి ధర నమోదు
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 font-roboto">
                  Date / తేదీ
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-gray-700 font-roboto"
                  />
                </div>
              </div>

              {/* Gold Price Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 font-roboto">
                  Gold Price (8 grams, 22 Carat) / బంగారం ధర (8 గ్రాములు, 22 క్యారెట్)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="number"
                    name="goldPrice"
                    required
                    min="0"
                    step="0.01"
                    placeholder="Enter gold price in ₹"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-gray-700 font-roboto"
                  />
                </div>
              </div>

              {/* Silver Price Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 font-roboto">
                  Silver Price (10 grams) / వెండి ధర (10 గ్రాములు)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="number"
                    name="silverPrice"
                    required
                    min="0"
                    step="0.01"
                    placeholder="Enter silver price in ₹"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-gray-700 font-roboto"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-roboto"
              >
                Show Rates / ధరలను చూపించు
              </button>
            </form>
          </div>
        ) : (
          /* Display Section */
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 font-roboto mb-2">
                Current Rates
              </h3>
              <p className="text-lg text-gray-600 font-telugu">
                ప్రస్తుత ధరలు
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* English Column */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h4 className="text-xl font-bold text-blue-800 mb-4 font-roboto text-center">
                  English
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-bold text-gray-700 font-roboto">Date:</span>
                    <span className="text-gray-600 font-roboto">{formatDate(formData.date)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-bold text-gray-700 font-roboto">Gold Price (8 grams, 22 Carat):</span>
                    <span className="text-amber-600 font-bold font-roboto">₹{formData.goldPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-bold text-gray-700 font-roboto">Silver Price (10 grams):</span>
                    <span className="text-gray-600 font-bold font-roboto">₹{formData.silverPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Telugu Column */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                <h4 className="text-xl font-bold text-amber-800 mb-4 font-telugu text-center">
                  తెలుగు
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-bold text-gray-700 font-telugu">తేదీ:</span>
                    <span className="text-gray-600 font-telugu">{formatDate(formData.date)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-bold text-gray-700 font-telugu">బంగారం ధర (8 గ్రాములు, 22 క్యారెట్):</span>
                    <span className="text-amber-600 font-bold font-telugu">₹{formData.goldPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <span className="font-bold text-gray-700 font-telugu">వెండి ధర (10 గ్రాములు):</span>
                    <span className="text-gray-600 font-bold font-telugu">₹{formData.silverPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleGoBack}
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-roboto"
              >
                <ArrowLeft className="mr-2" size={20} />
                Go Back / వెనుకకు వెళ్లు
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-roboto text-sm">
            © 2024 Balaji Jewellery Mart. All rights reserved.
          </p>
          <p className="font-telugu text-sm mt-1">
            © 2024 బాలాజీ జ్యువెల్లరీ మార్ట్. అన్ని హక్కులు సురక్షితం.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;