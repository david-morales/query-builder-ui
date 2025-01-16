import type { Field } from 'react-querybuilder';

export const fields: Field[] = [
  {
    name: 'eventType',
    label: 'Event Type',
    valueEditorType: 'select',
    values: [
      { name: 'accident', label: 'Accident' },
      { name: 'incident', label: 'Incident' },
      { name: 'seriousIncident', label: 'Serious Incident' },
    ],
    operators: [
      { name: '=', label: 'Equals' },
      { name: '!=', label: 'Not Equals' },
    ], // Equality operators for categorical data
  },
  {
    name: 'aircraftModel',
    label: 'Aircraft Model',
    placeholder: 'Enter aircraft model',
    operators: [
      { name: 'contains', label: 'Contains' },
      { name: 'beginsWith', label: 'Begins With' },
      { name: 'endsWith', label: 'Ends With' },
      { name: '=', label: 'Equals' },
    ], // Text field operators
  },
  {
    name: 'operationType',
    label: 'Operation Type',
    valueEditorType: 'select',
    values: [
      { name: 'commercial', label: 'Commercial' },
      { name: 'nonCommercial', label: 'Non-Commercial' },
      { name: 'military', label: 'Military' },
    ],
    operators: [
      { name: '=', label: 'Equals' },
      { name: '!=', label: 'Not Equals' },
    ], // Equality operators for enum fields
  },
  {
    name: 'phaseOfFlight',
    label: 'Phase of Flight',
    valueEditorType: 'select',
    values: [
      { name: 'takeoff', label: 'Takeoff' },
      { name: 'cruise', label: 'Cruise' },
      { name: 'landing', label: 'Landing' },
      { name: 'taxi', label: 'Taxi' },
    ],
    operators: [
      { name: '=', label: 'Equals' },
      { name: '!=', label: 'Not Equals' },
    ], // Equality operators for enum fields
  },
  {
    name: 'severity',
    label: 'Severity',
    valueEditorType: 'radio',
    values: [
      { name: 'low', label: 'Low' },
      { name: 'medium', label: 'Medium' },
      { name: 'high', label: 'High' },
    ],
    operators: [
      { name: '=', label: 'Equals' },
      { name: '!=', label: 'Not Equals' },
    ], // Equality operators for categorical data
  },
  {
    name: 'reportedBy',
    label: 'Reported By',
    valueEditorType: 'select',
    values: [
      { name: 'pilot', label: 'Pilot' },
      { name: 'maintenance', label: 'Maintenance Personnel' },
      { name: 'airTrafficControl', label: 'Air Traffic Control' },
    ],
    operators: [
      { name: '=', label: 'Equals' },
      { name: '!=', label: 'Not Equals' },
    ], // Equality operators for enum fields
  },
  {
    name: 'occurrenceDate',
    label: 'Occurrence Date',
    inputType: 'date',
    operators: [
      { name: '=', label: 'Equals' },
      { name: '!=', label: 'Not Equals' },
      { name: '<', label: 'Before' },
      { name: '<=', label: 'On or Before' },
      { name: '>', label: 'After' },
      { name: '>=', label: 'On or After' },
      { name: 'between', label: 'Between' },
    ], // Operators for date fields
  },
  {
    name: 'location',
    label: 'Location',
    placeholder: 'Enter location',
    operators: [
      { name: 'contains', label: 'Contains' },
      { name: 'beginsWith', label: 'Begins With' },
      { name: 'endsWith', label: 'Ends With' },
      { name: '=', label: 'Equals' },
    ], // Text field operators
  },
  {
    name: 'contributingFactors',
    label: 'Contributing Factors',
    valueEditorType: 'multiselect',
    values: [
      { name: 'weather', label: 'Weather' },
      { name: 'humanError', label: 'Human Error' },
      { name: 'mechanicalFailure', label: 'Mechanical Failure' },
      { name: 'navigationError', label: 'Navigation Error' },
    ],
    operators: [
      { name: 'in', label: 'In' },
      { name: 'notIn', label: 'Not In' },
    ], // Multi-select operators
  },
  {
    name: 'correctiveActions',
    label: 'Corrective Actions Taken',
    valueEditorType: 'textarea',
    placeholder: 'Describe the corrective actions',
    operators: [
      { name: 'contains', label: 'Contains' },
      { name: 'beginsWith', label: 'Begins With' },
      { name: 'endsWith', label: 'Ends With' },
    ], // Text field operators
  },
];
