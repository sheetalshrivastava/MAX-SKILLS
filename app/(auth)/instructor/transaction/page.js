"use client";

import { useMemo, useState } from "react";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdDownload,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdMoreHoriz,
} from "react-icons/md";

import "./Transaction.scss";

const earningData = [
  { month: "Jan", earning: 6200, height: 136 },
  { month: "Feb", earning: 4200, height: 94 },
  { month: "Mar", earning: 5300, height: 112 },
  { month: "Apr", earning: 4987, height: 108 },
  { month: "May", earning: 3900, height: 86 },
  { month: "Jun", earning: 6100, height: 128 },
  { month: "Jul", earning: 7450, height: 152 },
  { month: "Aug", earning: 5700, height: 120 },
  { month: "Sep", earning: 8200, height: 166 },
  { month: "Oct", earning: 4300, height: 96 },
  { month: "Nov", earning: 6900, height: 144 },
  { month: "Dec", earning: 7600, height: 156 },
];

const transactionsData = [
  {
    id: 1,
    date: "January 2, 2020",
    name: "Samantha William",
    amount: 60,
    status: "Completed",
  },
  {
    id: 2,
    date: "January 2, 2020",
    name: "Jordan Nico",
    amount: 60,
    status: "Pending",
  },
  {
    id: 3,
    date: "January 2, 2020",
    name: "Nadila Adja",
    amount: 60,
    status: "Canceled",
  },
  {
    id: 4,
    date: "February 8, 2020",
    name: "Johnny Ahmad",
    amount: 85,
    status: "Completed",
  },
  {
    id: 5,
    date: "March 15, 2020",
    name: "Karen Hope",
    amount: 75,
    status: "Pending",
  },
  {
    id: 6,
    date: "April 10, 2020",
    name: "Robert John",
    amount: 95,
    status: "Completed",
  },
];

const statusClass = {
  Completed: "completed",
  Pending: "pending",
  Canceled: "canceled",
};

function formatMoney(value) {
  return `$ ${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function getDateValue(date) {
  return new Date(date).getTime();
}

export default function TransactionPage() {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const [page, setPage] = useState(1);

  const handleSort = (key) => {
    setSortConfig((current) => {
      if (current.key === key) {
        return {
          key,
          direction: current.direction === "asc" ? "desc" : "asc",
        };
      }

      return {
        key,
        direction: "asc",
      };
    });
  };

  const sortedTransactions = useMemo(() => {
    const data = [...transactionsData];

    if (!sortConfig.key) {
      return data;
    }

    data.sort((a, b) => {
      let first = a[sortConfig.key];
      let second = b[sortConfig.key];

      if (sortConfig.key === "amount") {
        first = Number(first);
        second = Number(second);
      }

      if (sortConfig.key === "date") {
        first = getDateValue(first);
        second = getDateValue(second);
      }

      if (typeof first === "string") {
        first = first.toLowerCase();
        second = second.toLowerCase();
      }

      if (first < second) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }

      if (first > second) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }

      return 0;
    });

    return data;
  }, [sortConfig]);

  const visibleTransactions = showAll
    ? sortedTransactions
    : sortedTransactions.slice(0, 3);

  const handleDownload = (student) => {
    const invoiceText = `
MAXSKILLS INVOICE

Student: ${student.name}
Date: ${student.date}
Amount: ${formatMoney(student.amount)}
Status: ${student.status}
    `.trim();

    const blob = new Blob([invoiceText], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${student.name.replaceAll(" ", "-")}-invoice.txt`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  return (
    <section className="transaction-page">
      {/* =====================================
          TOP AREA
      ====================================== */}

      <div className="transaction-grid">
        {/* =====================================
            EARNINGS CARD
        ====================================== */}

        <div className="earnings-card">
          <div className="earnings-info">
            <h2>Earnings</h2>

            <span className="earning-date">
              Dec 1 - Dec 31, 2021
            </span>

            <span className="earning-label">
              This Month
            </span>

            <strong>$53.678</strong>

            <span className="earning-growth">
              ↑ +15%
            </span>
          </div>

          <div className="earning-chart">
            <div className="chart-y-axis">
              <span>$10k</span>
              <span>$7k</span>
              <span>$5k</span>
              <span>$3k</span>
              <span>$0</span>
            </div>

            <div className="chart-area">
              <div className="chart-lines">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="bars">
                {earningData.map((item, index) => (
                  <div
                    className="bar-column"
                    key={item.month}
                  >
                    <div className="bar-pair">
                      <div
                        className="earning-bar green"
                        style={{
                          height: `${item.height}px`,
                        }}
                        onMouseEnter={() =>
                          setHoveredBar(index)
                        }
                        onMouseLeave={() =>
                          setHoveredBar(null)
                        }
                      >
                        {hoveredBar === index && (
                          <div className="earning-tooltip">
                            <strong>
                              ${item.earning.toLocaleString()}
                            </strong>

                            <span>Earn</span>

                            <i />
                          </div>
                        )}
                      </div>

                      <div
                        className="earning-bar orange"
                        style={{
                          height: `${Math.max(
                            35,
                            item.height - 42
                          )}px`,
                        }}
                      />
                    </div>

                    <span className="month">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            TOTAL ORDER
        ====================================== */}

        <div className="side-top-card total-order-card">
          <h3>Total Order</h3>

          <div className="order-number">
            317,642
          </div>

          <span className="order-growth">
            ↑ 50%
          </span>

          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </p>
        </div>

        {/* =====================================
            EARNING COURSES
        ====================================== */}

        <div className="side-top-card earning-courses-card">
          <h3>Earning Courses</h3>

          <span className="course-month">
            This Month
          </span>

          <strong>$53.678</strong>

          <div className="donut-wrapper">
            <div className="donut">
              <div className="donut-center" />
            </div>
          </div>

          <div className="course-legend">
            <div>
              <span className="legend-dot design" />
              <span>Design (27%)</span>
              <b>763</b>
            </div>

            <div>
              <span className="legend-dot programming" />
              <span>Programming (50%)</span>
              <b>321</b>
            </div>

            <div>
              <span className="legend-dot science" />
              <span>Science (23%)</span>
              <b>69</b>
            </div>
          </div>
        </div>

        {/* =====================================
            LATEST TRANSACTION
        ====================================== */}

        <div className="latest-transaction-card">
          <div className="latest-header">
            <h2>Latest Transaction</h2>

            <button
              type="button"
              className="view-all-button"
              onClick={() => {
                setShowAll((current) => !current);
                setPage(1);
              }}
            >
              {showAll ? "View less" : "View all"}
            </button>
          </div>

          <div className="transaction-table-wrapper">
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>
                    <button
                      type="button"
                      onClick={() => handleSort("date")}
                    >
                      Date
                      <MdKeyboardArrowDown />
                    </button>
                  </th>

                  <th>
                    <button
                      type="button"
                      onClick={() => handleSort("name")}
                    >
                      Name
                      <MdKeyboardArrowDown />
                    </button>
                  </th>

                  <th>
                    <button
                      type="button"
                      onClick={() =>
                        handleSort("amount")
                      }
                    >
                      Amount
                      <MdKeyboardArrowDown />
                    </button>
                  </th>

                  <th>
                    <button
                      type="button"
                      onClick={() =>
                        handleSort("status")
                      }
                    >
                      Status
                      <MdKeyboardArrowDown />
                    </button>
                  </th>

                  <th>
                    <button
                      type="button"
                      onClick={() =>
                        handleSort("id")
                      }
                    >
                      Invoice
                      <MdKeyboardArrowDown />
                    </button>
                  </th>
                </tr>
              </thead>

              <tbody>
                {visibleTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.date}</td>

                    <td className="transaction-name">
                      {transaction.name}
                    </td>

                    <td>
                      {formatMoney(transaction.amount)}
                    </td>

                    <td>
                      <span
                        className={`transaction-status ${
                          statusClass[
                            transaction.status
                          ]
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="download-button"
                        onClick={() =>
                          handleDownload(transaction)
                        }
                      >
                        Download
                        <MdDownload />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}

          {showAll && (
            <div className="transaction-pagination">
              <button
                type="button"
                onClick={() =>
                  setPage((current) =>
                    Math.max(1, current - 1)
                  )
                }
                disabled={page === 1}
              >
                <MdKeyboardArrowLeft />
              </button>

              <button
                type="button"
                className={page === 1 ? "active" : ""}
                onClick={() => setPage(1)}
              >
                1
              </button>

              <button
                type="button"
                className={page === 2 ? "active" : ""}
                onClick={() => setPage(2)}
              >
                2
              </button>

              <button
                type="button"
                className={page === 3 ? "active" : ""}
                onClick={() => setPage(3)}
              >
                3
              </button>

              <button
                type="button"
                onClick={() =>
                  setPage((current) =>
                    Math.min(3, current + 1)
                  )
                }
                disabled={page === 3}
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}











