import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThoughtList from '../components/ThoughtList';

const Profile = props => {
  const { username: userParam } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [thoughts, setThoughts] = useState([{
    username: userParam,
    createdAt: '',
    thought: '',
  }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://18.191.185.164/api/users/${userParam}`, {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        setThoughts([...data]);
        setIsLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userParam]);

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${userParam}'s` : 'your'} profile.
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-9">
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title={`${userParam}'s thoughts...`} user={`${userParam}`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
