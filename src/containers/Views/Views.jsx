import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';
import './Views.scss';



const Views = () => {

  //////////////////////////////////////
  // REFS & STATE
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);


  //////////////////////////////////////
  // FETCH VISITORS
  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const snap = await getDocs(collection(db, 'visitors'));
        const data = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // parse the locale-string timestamps, sort newest first
        data.sort((a, b) => {
          const aTime = new Date(a.timestamp).getTime() || 0;
          const bTime = new Date(b.timestamp).getTime() || 0;
          return bTime - aTime;
        });

        setRows(data);
      } catch (err) {
        console.error('Failed to load visitors', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
  }, []);


  //////////////////////////////////////
  // RENDER
  return (
    <section className="views">
      <div className="header">
        <h1>Visitors</h1>
        <span className="count">{loading ? 'Loading…' : `${rows.length} entries`}</span>
      </div>

      {!loading && rows.length > 0 && (
        <div className="table">
          <div className="row heading">
            <span className="method">Method</span>
            <span className="name">Name</span>
            <span className="platform">Platform</span>
            <span className="timestamp">Timestamp</span>
            <span className="timezone">Timezone</span>
            <span className="ua">User Agent</span>
          </div>

          {rows.map(row => (
            <div
              key={row.id}
              className={`row cursorHover ${expandedId === row.id ? 'expanded' : ''}`}
              onClick={() => setExpandedId(expandedId === row.id ? null : row.id)}
            >
              <span className="method">{row.method}</span>
              <span className="name">{row.name}</span>
              <span className="platform">{row.platform}</span>
              <span className="timestamp">{row.timestamp}</span>
              <span className="timezone">{row.timezone || '—'}</span>
              <span className="ua">{row.userAgent}</span>
            </div>
          ))}
        </div>
      )}

      {!loading && rows.length === 0 && (
        <p className="empty">No visitors logged yet.</p>
      )}
    </section>
  );
};


export default Views;
