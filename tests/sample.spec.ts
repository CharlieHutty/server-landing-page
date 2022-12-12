import { describe, expect, it, test } from 'vitest';
import { render, screen } from "@testing-library/svelte";
import Card from 'src/lib/Card.svelte';

describe('Sample Test Block', () => {
	it('sample test which should be true', () => {
		expect(true).toBe(true);
	});
});


describe("Card", () => {
    const card1 = { title: 'Card', description: "Desc", imageUrl: 'test', port: 2020 };
  
    test("shows card when rendered", () => {
      render(Card, { props: { title: 'Card', description: "Desc", imageUrl: 'test', port: 2020 } });
  
      expect(screen.getByText("Card")).toBeInTheDocument(); // checkbox
      expect(screen.getByText(card1.title)).toBeInTheDocument();
    });
  });
  
  
