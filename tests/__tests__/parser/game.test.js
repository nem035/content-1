import ava from 'ava'
import loadMD from './utils/load-md'
import {
  parse
} from '../../parser'

const ast = {
  'kind': 'insight',
  'nodes': [{
    'name': 'headline',
    'kind': 'headline',
    'value': 'What should it be stored in?',
    'start': {
      'line': 0,
      'column': 0
    },
    'end': {
      'line': 0,
      'column': 29
    }
  }, {
    'name': 'author',
    'kind': 'attribute',
    'value': 'mihaiberq',
    'start': {
      'line': 1,
      'column': 8
    },
    'end': {
      'line': 1,
      'column': 16
    }
  }, {
    'name': 'levels',
    'kind': 'attribute',
    'value': ['beginner', 'basic'],
    'start': {
      'line': 5,
      'column': 2
    },
    'end': {
      'line': 6,
      'column': 8
    }
  }, {
    'name': 'type',
    'kind': 'attribute',
    'value': 'fillTheGap',
    'start': {
      'line': 8,
      'column': 6
    },
    'end': {
      'line': 8,
      'column': 15
    }
  }, {
    'name': 'category',
    'kind': 'attribute',
    'value': 'must-know',
    'start': {
      'line': 10,
      'column': 10
    },
    'end': {
      'line': 10,
      'column': 18
    }
  }, {
    'name': 'parent',
    'kind': 'attribute',
    'value': 'the-queue-data-structure',
    'start': {
      'line': 12,
      'column': 8
    },
    'end': {
      'line': 12,
      'column': 31
    }
  }, {
    'name': 'content',
    'kind': 'section',
    'value': 'Choose the data structures that would best fit the examples.',
    'start': {
      'line': 17,
      'column': 0
    },
    'end': {
      'line': 17,
      'column': 59
    }
  }, {
    'name': 'gameContent',
    'kind': 'section',
    'value': '```\nConga line representation.\n```\n* Linked list\n* Array\n* Stack\n%exp\nYou can hop in the conga line anywhere you want without disturbing more than 2 people.\n%\n\n---\n\n```\nA way to undo actions.\n```\n* Stack\n* Array\n* Queue\n%exp\nThe stack\'s last in, first out principle makes this an easy job.\n%\n\n---\n```\nPrinting documents in order of their arrival.\n```\n* Queue\n* Array\n* Linked list\n%exp\nYou want the first document sent to be printed first (first in, first out).\n%\n---\n```\nBooks on a bookshelf.\n```\n* Array\n* Queue\n* Stack\n%exp\nYou would have to move the other books to insert/remove one. The bookshelf also has, most of the times, fixed size.\n%\n---\n```\nChess board.\n```\n* Two-dimensional Array\n* Linked list\n* Queue\n%exp\nThe chessboard is in itself a fixed `8*8` matrix (two-dimensional array).\n%\n---\n```\nEgg hunt clues.\n```\n* Linked list\n* Stack\n* Array\n\n%exp\nClues are linked to one another (the previous one gets you to the next). Adding an additional clue shouldn\'t mean having to move every other clue.\n%\n---\n```\nA train.\n```\n* Linked list\n* Array\n* Queue\n%exp\nFrom each car, you\'d only be able to get to the next and the previous one.\n%\n---\n```\nStore recursion calls.\n```\n* Stack\n* Array\n* Queue\n%exp\nThe recursion goes as deep as possible, then computes the latest added operation or function. As this principle ressemblances the last in, first out approach, a stack should be used.\n%\n---\n```\nStore the first n numbers in the Fibonacci\n\nsequence.\n```\n\n* Array\n* Stack\n* Linked list\n%exp\nAs you know the index of the last Fibonacci number you have to compute, declaring an array makes sense.\n%\n---\n```\nCars in a drive-through.\n```\n* Queue\n* Stack\n* Linked list\n%exp\nThe first car that got there gets to be served first: the answer is queue.\n%',
    'start': {
      'line': 22,
      'column': 0
    },
    'end': {
      'line': 127,
      'column': 0
    }
  }]
}

const md = loadMD('game')

ava.test('parsing should return the proper AST for a game', t => {
  const parsedAST = parse(md)

  t.is(ast.kind, parsedAST.kind, 'AST kinds are not equal')

  ast.nodes.forEach((node, i) => {
    t.deepEqual(node, parsedAST.nodes[i], 'failing node ' + node.name)
  })
})
