require("minitest/autorun")
require("minitest/rg")
require_relative("../testing_task_2")
require_relative("../card.rb")


class TestCardGame  < MiniTest::Test

  def setup
    @card1 = Card.new("hearts", 10)
    @card2 = Card.new("diamonds", 11)
    @card3 = Card.new("clubs", 1)
    @card4 = Card.new("spades", 9)
    @cardgame = CardGame.new
  end


def test_checkforAce__withAce
    expected = true
    result = @cardgame.checkforAce(@card3)
    assert_equal(expected, result)
end

def test_checkforAce__notAce
  expected = false
  result = @cardgame.checkforAce(@card1)
  assert_equal(expected, result)
end


def test_highest_card
  expected = @card2
  result = @cardgame.highest_card(@card2, @card1)
  assert_equal(expected,result)
end


def test_the_total_value_of_the_cards
  expected = "You have a total of 21"
  result = CardGame.cards_total([@card1, @card2])
  assert_equal(expected, result)
end
end
