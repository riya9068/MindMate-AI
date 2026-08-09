import { useState } from "react";
import { useAction, useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const Journal = () => {
  const [journal, setJournal] = useState("");
  const [analysis, setAnalysis] = useState("");

  const analyze = useAction(api.ai.analyzeJournal);

  const saveJournal = useMutation(api.journal.addJournal);
  const journals = useQuery(api.journal.getJournal);
  
    const [showHistory, setShowHistory] = useState(false);
  const handleAnalyze = async () => {
    if (!journal) return;

    const result = await analyze({
      journal,
    });

    setAnalysis(result);

    await saveJournal({
      
      journal,
      analysis: result,
    //   createdAt: Date.now(),
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white rounded-3xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold">
        📝 Daily Journal
      </h2>

      <textarea
        rows={6}
       className="border p-4 rounded-xl w-full mt-4 bg-white dark:bg-slate-700 dark:text-white"
        placeholder="Write about your day..."
        value={journal}
        onChange={(e) => setJournal(e.target.value)}
      />
        <div className="flex gap-4 mt-4 dark:text-white">

<button
onClick={handleAnalyze}
className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
>
✨ Analyze with AI
</button>

<button
onClick={() => setShowHistory(!showHistory)}
className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
>
{showHistory ? "❌ Close History" : "📚 View History"}
</button>

</div>
      
      

      {analysis && (
        // <div className="bg-purple-50 p-5 rounded-xl mt-6 whitespace-pre-wrap">
        //   {analysis}
        // </div>
        <div className="bg-white dark:bg-slate-800">
  <p className="text-gray-800 dark:text-white">
    {analysis}
  </p>
</div>
      )}

      {showHistory && journals && journals.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            📚 Journal History
          </h2>

          {journals.map((item) => (
            <div
              key={item._id}
              className="bg-gray-50 dark:bg-slate-700 rounded-xl p-4 mb-4 border dark:border-slate-600 dark:text-white"
            >
              <p className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>

              <h3 className="font-semibold mt-2 dark:text-white">
                📝 Journal
              </h3>

              <p className="mt-1 whitespace-pre-wrap">
                {item.journal}
              </p>

              <h3 className="font-semibold mt-4 dark:text-white">
                🧠 AI Analysis
              </h3>

              <p className="mt-1 whitespace-pre-wrap">
                {item.analysis}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Journal;