'use client'

import React from 'react'

const reports = [
  { name: 'Appointment Detail Report', endpoint: '/api/reports/appointment-detail' },
  { name: 'Completed Appointments Report', endpoint: '/api/reports/completed-appointments' },
  { name: 'Colposcopy Exams on Date Report', endpoint: '/api/reports/colposcopy-exams-on-date' },
  { name: 'In Progress Appointments Report', endpoint: '/api/reports/in-progress-appointments' },
  { name: 'Pending Appointments Report', endpoint: '/api/reports/pending-appointments' },
  { name: 'Doctor Info Report', endpoint: '/api/reports/doctor-info' },
  { name: 'Patient Info Report', endpoint: '/api/reports/patient-info' }
]

const ReportList = () => {
  const handleDownload = async (endpoint: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000${endpoint}`)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = endpoint.split('/').pop() + '.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (error) {
      console.error('Error downloading the report:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-4 p-6">
      <h1 className="mb-6 text-3xl font-bold text-primary-blue">Available Reports</h1>
      <ul className="space-y-4">
        {reports.map(report => (
          <li
            key={report.endpoint}
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md"
          >
            <span className="font-semibold text-gray-1">{report.name}</span>
            <button
              onClick={() => handleDownload(report.endpoint)}
              className="rounded-md bg-primary-pink px-4 py-2 text-white transition-colors hover:bg-secondary-pink"
            >
              Descargar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReportList
