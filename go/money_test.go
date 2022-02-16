package main

import (
	s "tdd/stocks"
	"testing"
)

// func TestMultiplication(t *testing.T) {
// 	fiver := Dollar{
// 		amount: 5,
// 	}
// 	tenner := fiver.Times(2)

// 	if tenner.amount != 10 {
// 		t.Errorf("Expect 10, got: [%d]", tenner.amount)
// 	}
// }

func TestMultiplicationInEuros(t *testing.T) {
	tenEuros := s.newMoney{
		amount:   10,
		currency: "EUR",
	}
	twentyEuros := tenEuros.Times(2)

	if twentyEuros.amount != 20 {
		t.Errorf("Expect 20, got: [%+v]", twentyEuros.amount)
	}
}

func TestDivision(t *testing.T) {
	originalMoney := s.newMoney{amount: 4002, currency: "KRW"}
	actualResult := originalMoney.Divide(4)
	expectedResult := s.newMoney{amount: 1000.5, currency: "KRW"}

	// if expectedMoneyAfterDivision != actualMoneyAfterDivision {
	// 	t.Errorf("Expected %+v got %+v", expectedMoneyAfterDivision, actualMoneyAfterDivision)
	// }

	assertEqual(t, expectedResult, actualResult)
}

func TestAddition(t *testing.T) {
	var portfolio s.Portfolio
	var portfolioInDollars s.Money

	fiveDollar := s.newMoney{amount: 5, currency: "USD"}
	tenDollar := s.newMoney{amount: 10, currency: "USD"}
	fifteenDollar := s.newMoney{amount: 15, currency: "USD"}

	portfolio = portfolio.Add(fiveDollar)
	portfolio = portfolio.Add(tenDollar)
	portfolioInDollars = portfolio.Evaluate("USD")

	assertEqual(t, fifteenDollar, portfolioInDollars)
}

// type Dollar struct {
// 	amount int
// }

// type Money struct {
// 	amount   float64
// 	currency string
// }

// func (d Dollar) Times(multiplier int) Dollar {
// 	return Dollar{d.amount * multiplier}
// }

// func (m Money) Times(multiplier int) Money {
// 	return Money{amount: m.amount * float64(multiplier), currency: m.currency}
// }

// func (m Money) Divide(divisor int) Money {
// 	return Money{amount: m.amount / float64(divisor), currency: m.currency}
// }

func assertEqual(t *testing.T, expected s.Money, actual s.Money) {
	if expected != actual {
		t.Errorf("Expected %+v Got %+v", expected, actual)
	}
}

// type Portfolio []Money

// func (p Portfolio) Add(money Money) Portfolio {
// 	p = append(p, money)
// 	return p
// }

// func (p Portfolio) Evaluate(currency string) Money {
// 	total := 0.0
// 	for _, m := range p {
// 		total = total + m.amount
// 	}
// 	return Money{amount: total, currency: "USD"}
// }
