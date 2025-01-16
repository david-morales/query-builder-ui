import { useState } from 'react';
import type { Field, RuleGroupType } from 'react-querybuilder';
import { QueryBuilder, formatQuery, defaultOperators } from 'react-querybuilder';
import { parseSQL } from 'react-querybuilder/parseSQL';
import { QueryBuilderDnD } from '@react-querybuilder/dnd';
import * as ReactDnD from 'react-dnd';
import * as ReactDndHtml5Backend from 'react-dnd-html5-backend';
import 'react-querybuilder/dist/query-builder.scss';
import './styles.scss';
import { QueryBuilderBootstrap } from '@react-querybuilder/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'bootstrap/scss/bootstrap.scss';
import { fields } from './fields';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const initialQuery: RuleGroupType = {
  combinator: 'and',
  rules: [
    {
      field: 'eventType',
      operator: '=',
      value: 'accident',
    },
    {
      field: 'severity',
      operator: '=',
      value: 'high',
    },
    {
      combinator: 'or',
      rules: [
        {
          field: 'contributingFactors',
          operator: 'in',
          value: ['weather', 'humanError'],
        },
        {
          field: 'phaseOfFlight',
          operator: '=',
          value: 'landing',
        },
      ],
    },
    {
      field: 'occurrenceDate',
      operator: '>=',
      value: '2025-01-01',
    },
  ],
};

export const App = () => {
  const [query, setQuery] = useState(initialQuery);
  const [activeMainTab, setActiveMainTab] = useState<'export' | 'import'>('export');
  const [activeExportSubTab, setActiveExportSubTab] = useState<'sql' | 'elasticsearch'>('sql');
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);

  const sqlQuery = formatQuery(query, 'sql');
  const esQuery = formatQuery(query, 'elasticsearch');
  const naturalLanguageQuery = formatQuery(query, {
    format: 'natural_language',
    parseNumbers: true,
    getOperators: () => defaultOperators,
    fields: fields.map((field) => ({
      value: field.name,
      label: field.label || field.name,
    })),
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Query copied to clipboard!');
    });
  };

  const handleImport = () => {
    try {
      const parsedQuery = parseSQL(importText);
      setQuery(parsedQuery);
      setImportError(null);
    } catch (error) {
      console.error('Error parsing SQL:', error);
      setImportError('Invalid SQL query. Ensure it is a valid WHERE clause.');
    }
  };

  return (
    <div className="app-container">
      {/* Natural Language Query Section */}
      <div className="natural-language-section">
        <h4>Current Query in Natural Language</h4>
        <p className="natural-language-display">{naturalLanguageQuery}</p>
      </div>

      <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>
        <QueryBuilderBootstrap>
          <QueryBuilder
            fields={fields}
            query={query}
            onQueryChange={setQuery}
            showNotToggle
            controlClassnames={{ queryBuilder: 'queryBuilder-branches' }}
          />
        </QueryBuilderBootstrap>
      </QueryBuilderDnD>
      <div className="tabs-container">
        {/* Main Tabs */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeMainTab === 'export' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('export')}
            >
              Export
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeMainTab === 'import' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('import')}
            >
              Import
            </button>
          </li>
        </ul>

        {/* Export Tab Content */}
        {activeMainTab === 'export' && (
          <div className="export-section">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeExportSubTab === 'sql' ? 'active' : ''}`}
                  onClick={() => setActiveExportSubTab('sql')}
                >
                  SQL
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeExportSubTab === 'elasticsearch' ? 'active' : ''}`}
                  onClick={() => setActiveExportSubTab('elasticsearch')}
                >
                  Elasticsearch
                </button>
              </li>
            </ul>
            <div className="tab-content">
              {activeExportSubTab === 'sql' && (
                <div className="query-display">
                  <h4>SQL Query</h4>
                  <SyntaxHighlighter
                    language="sql"
                    style={dracula}
                    className="wrapped-query-display"
                  >
                    {sqlQuery}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => handleCopy(sqlQuery)}
                    className="btn btn-primary mt-2"
                  >
                    Copy to Clipboard
                  </button>
                </div>
              )}
              {activeExportSubTab === 'elasticsearch' && (
                <div className="query-display">
                  <h4>Elasticsearch Query</h4>
                  <SyntaxHighlighter
                    language="json"
                    style={dracula}
                    className="wrapped-query-display"
                  >
                    {JSON.stringify(esQuery, null, 2)}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => handleCopy(JSON.stringify(esQuery, null, 2))}
                    className="btn btn-primary mt-2"
                  >
                    Copy to Clipboard
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Import Tab Content */}
        {activeMainTab === 'import' && (
          <div className="import-section">
            <h4>Import SQL Query</h4>
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Enter your SQL WHERE clause here..."
              rows={5}
              style={{
                width: '100%',
                fontFamily: 'monospace',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
              }}
            />
            <button
              onClick={handleImport}
              style={{
                display: 'block',
                marginTop: '10px',
                padding: '10px 15px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Import Query
            </button>
            {importError && <p style={{ color: 'red', marginTop: '10px' }}>{importError}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
