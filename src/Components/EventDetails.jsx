import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

function EventDetail({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-3 text-xs">
      <div className="text-blue-600">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-medium text-gray-900">{value}</div>
      </div>
    </div>
  );
}

export function EventDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <EventDetail
        icon={<Calendar className="w-5 h-5" />}
        label="Date"
        value="March 30, 2024"
      />
      <EventDetail
        icon={<Clock className="w-5 h-5" />}
        label="Time"
        value="10:00 AM - 5:00 PM"
      />
      <EventDetail
        icon={<MapPin className="w-5 h-5" />}
        label="Location"
        value="Main Auditorium, Tech Campus"
      />
      <EventDetail
        icon={<Users className="w-5 h-5" />}
        label="Capacity"
        value="250 Seats Available"
      />
    </div>
  );
}
