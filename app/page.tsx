import React from "react";
import Link from "next/link";

const debunkedClaims = [
  {
    id: 1,
    claim: "Eating chocolate cures the common cold.",
    evidence:
      "Multiple scientific studies have shown no direct link between chocolate consumption and curing the common cold.",
  },
  {
    id: 2,
    claim: "The moon landing was faked.",
    evidence:
      "Extensive evidence from NASA, space agencies, and independent experts confirms the authenticity of the moon landing.",
  },
  // Add more debunked claims here
];
const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Hoax Halt.</h1>

        <div className="space-y-6">
          {debunkedClaims.map((claim) => (
            <div key={claim.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{claim.claim}</h2>
              <p className="text-gray-600 mb-4">{claim.evidence}</p>
              <Link
                className="text-blue-500 hover:underline"
                href={`/claim/${claim.id}`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
